module.exports = function createDreamTeam(members) {
  const result = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach( item => {
    if ( typeof item === 'string') {
      result.push(item.trim()[0].toUpperCase());
    }
  })

  return result.sort().join('');
};