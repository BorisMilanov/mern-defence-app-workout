const profile = async (req,res)=>{
    const email = req.body
    try {
        res.status(200).json(email.email)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
}

module.exports = {profile}