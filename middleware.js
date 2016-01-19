module.exports = {
    
    logger: function(req, res, next) {
        
        console.log(new Date().toString() + ': Logged!');
        next();
    }
    
};


