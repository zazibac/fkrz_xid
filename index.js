const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('zsqn54N7EN', uuidlib.v4());
	}

module.exports = generateId
