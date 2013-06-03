/**
 * Get an HTMLElement by its `id` with optional lookup caching
 *
 * @api public
 * @param {String} i The `id`
 * @param {Boolean} [force] Force a _fresh_ lookup
 * @return {HTMLElement|null} The `HTMLElement`
 */
var id = module.exports = function (i, force) {
  if (force) id.cache[i] = null
  id.cache[i] = id.cache[i] || document.getElementById(i)
  return id.cache[i]
}

id.cache = {}
