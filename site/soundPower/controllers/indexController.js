
module.exports = {
    'index' : (req, res) => {
        res.render('index', { 
            title: 'SoundPower' })
    },
    'faqs' : (req, res) => {
<<<<<<< HEAD
        res.render('faqs')
=======
        res.render('faqs',{
            title:"Preguntas Frecuentes"
        })
>>>>>>> 1e9deb6c4ad4fa4c572efd49e58a92a4d93dffbf
    }
}
