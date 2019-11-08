import { Request, Response } from 'express'
import { User, users } from './users'

import * as jwt from 'jsonwebtoken'
import {apiConfig} from './api-config'

export const handleAuthentication = (req: Request, res: Response) => {
    const user: User = req.body

    if (isValid(user)) {
        const dbUser: User = users[`${user.email}`]

        const token = jwt.sign(
            {
                sub:dbUser.email, //SUBJECT -> identifica quem é o portador do token
                iss: 'meat-api' // ISSUER -> Quem está emitindo o token (no caso a aplicação)
            }, 
            apiConfig.secret //DE UM PASSWORD PARA  ASSINAR O TOKEN (NESSE PASSO NAO ESTÁ COMPARTILHANDO A SENHA)... ACESSAR JWT
            )

        res.json({
            name: dbUser.name,
            email: dbUser.email,
            accessToken: token
        })
    } else {
        res.status(403).json({
            message : 'Dados inválidos.'
        })
    }
}

function isValid(user: User):boolean {
    if (!user) {
        return false
    }
    const dbUser = users[`${user.email}`]
    return dbUser !== undefined && dbUser.matches(user)
}