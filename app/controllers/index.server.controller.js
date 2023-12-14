exports.render =
    function (req, res) {
        if (req.session.lastVisit) {
            console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();

        // definitions in MEAN
        var defs = [
            {name: 'MongoDB', desc: 'A document database with scalability & flexibilty that you want with the querying & indexing that you need.'},
            {name: 'Express', desc: 'A NodeJS framework that makes backend code easier to write.' },
            {name: 'Angular', desc: 'A client-side JavaScript framework used for single-page web applications.'},
            {name: 'Node', desc: 'The runtime environment that Express uses. It can run with resources outside of the browser.'}
        ];

        // my name
        var myname = "Nathan Scott";
        
        res.render('index', { 
            title: 'The MEAN Stack',
            defs: defs,
            myname: myname
        });
    };

