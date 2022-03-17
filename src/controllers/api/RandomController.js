import { fork } from 'child_process'

class RandomController {

    
    getRandom =  async (req, res) => {
        let cant = +req.query.cant ? +req.query.cant : 100000000;
        const mapRandom = fork("./MapRandom.js", [cant]);
        mapRandom.send('start')
        mapRandom.on('message', map => {       
           res.json(map)
        })
    }
}
export default new RandomController();
