import { Local } from "../models/local.js"
import { Op } from "sequelize"

async function getAllArg(){ //async porque hace una query a la db
    return await Local.findAll({
        where: {
            COUNTRY: "AR"
        }
    })
        
}

async function getAllArgInterior(){ 
    return await Local.findAll({
        where: {
            COUNTRY: "AR",
            [Op.and]: [{
                PROVINCE: {[Op.notLike]: "B"}},
                {PROVINCE: {[Op.notLike]: "C"}
            }]
            
        }
    })
        
}

export default { getAllArg, getAllArgInterior }