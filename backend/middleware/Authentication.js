const jwt=require('jsonwebtoken');
function auth(req,res,next)
{
  const token = req.headers['authorization']?.split(' ')[1];
    console.log(token);
    if(!token)
     return res.status(404).send('access denined');
    try{
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        req.user=verified;
        next();
    }
    catch(error)
    {
      res.status(404).send('Invalid token');
    }

}
module.exports=auth;