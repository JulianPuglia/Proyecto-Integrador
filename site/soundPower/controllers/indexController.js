
module.exports = {
    'index' : (req, res) => {
        res.render('index', { 
            title: 'SoundPower' })
    },
    'faqs' : (req, res) => {
        res.render('faqs',{
            title:"Preguntas Frecuentes"
        })
    }
}
