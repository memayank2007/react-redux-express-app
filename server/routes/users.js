import express from 'express';

let router = express.Router();

router.post('/', (req , res) => {
  console.log(res.body);
    // const { erros , isValid } = validateInput(res.body);
    //
    // if(!isValid){
    //   res.status(400).json(erros);
    // }
});

export default router;
