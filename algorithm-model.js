/* Shared pure control-flow model for the diagram, decision table and tests. */
(function (root) {
  'use strict';
  function create(a) {
    const by = {}, nodes = a.nodes.map(x => ({ ...x, br: x.br.map(b => ({ ...b })) }));
    const errs = a.errors.map(x => ({ ...x, t: 'err', row: 'E' }));
    const OK = { id: '$ok', t: 'ok', row: 0, text: a.ok };
    const FAIL = { id: '$fail', t: 'fail', row: 'E', text: a.fail };
    const REVIEW = { id: '$review', t: 'review', row: 'E', text: 'Нет доказанных нарушений, но есть непроверенные условия или вопросы для специалиста. Это не подтверждение соответствия.' };
    const DONE = { id: '$done', t: 'gate', row: 0, text: 'Итог после всех применимых итераций?',
      code: 'Сначала все файлы / элементы; нарушение имеет приоритет над review', br: [] };
    if (errs.some(x => x.status !== 'review')) DONE.br.push({ lab: 'есть нарушения', to: '$fail' });
    if (errs.some(x => x.status === 'review')) DONE.br.push({ lab: 'только вопросы', to: '$review' });
    DONE.br.push({ lab: 'нет замечаний', to: '$ok' });
    const last = {};
    nodes.filter(x => x.t !== 'skip').forEach(x => {
      x.prev = last[x.row] || null;
      if (x.prev) x.prev.next = x;
      last[x.row] = x;
    });
    nodes.push(DONE);
    nodes.concat(errs, [OK, FAIL, REVIEW]).forEach(x => { by[x.id] = x; });
    const cont = x => by[x.goto] || x.next || DONE;
    const edges = [];
    nodes.concat(errs).forEach(x => {
      if (x.t === 'step' || x.t === 'err') edges.push({ a: x, b: cont(x), lab: x.t === 'err' ? 'сохранить и продолжить' : '' });
      else if (x.t === 'gate') x.br.forEach(b => edges.push({ a: x, b: b.to ? by[b.to] : cont(x), lab: b.lab }));
    });
    const from = id => edges.filter(e => e.b.id === id).map(e => e.a);
    const terminals = [OK, FAIL, REVIEW].filter(x => from(x.id).length);
    return { a, by, nodes, errs, OK, FAIL, REVIEW, DONE, terminals, from, edges, cont };
  }
  // A decision table is a complete list of local branch rules, not an
  // exponential list of combinations pretending findings are early returns.
  function decisions(a) {
    const m = create(a);
    return m.edges.filter(e => e.a.t === 'gate').map(e => ({ gate: e.a, answer: e.lab, target: e.b,
      continuation: e.b.t === 'err' ? m.cont(e.b) : null }));
  }
  const api = { create, decisions };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.IfcAlgorithm = api;
})(typeof window !== 'undefined' ? window : globalThis);
