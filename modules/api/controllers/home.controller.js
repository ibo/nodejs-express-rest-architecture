class HomeController {
    constructor() {
        
    };

    index(req,res) {
        res.send('github.com/ibo');
    }
};

module.exports = new HomeController();