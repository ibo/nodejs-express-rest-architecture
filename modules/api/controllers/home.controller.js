class HomeController {
    constructor() {
        
    };

    index(req,res) {
        res.send('lorem');
    }
};

module.exports = new HomeController();