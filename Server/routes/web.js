function initRoutes(app){
    app.post('/donation-form', (req, res) => {
        //console.log(req.body);
        const donateData = req.body;
        DonateModel.create(donateData)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    })
    
    app.post('/volunteer-form' , (req,res)=>{
        const volunteerData = req.body; 
        //console.log(volunteerData);
        VolunteerModel.create(volunteerData)
        .then(volunteer => res.json(volunteer))
        .catch(err => res.json(err))
    })
    
    app.post('/contact-us', (req,res)=>{
        const contactData = req.body;
        //console.log(contactData);
        ContactUsModel.create(contactData)
        .then(contact => res.json(contact))
        .catch(err => res.json(err))
    
    })
}

module.exports = initRoutes;