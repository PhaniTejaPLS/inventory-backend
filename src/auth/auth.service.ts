import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,

    ) {

    }


    async validateUser(email:string, password:string) {
        const loggedInUser = await this.usersService.findByUsername(email);
        console.log('Logged in user:', loggedInUser);

        // if(loggedInUser && await bcrypt.compare(password, loggedInUser.password)){
        if(loggedInUser && password === loggedInUser.password){
            const { password, ...result} = loggedInUser;
            console.log('Validated user:', result);
            return result;
        }else{
            throw new Error('Invalid credentials');
        }
    }

    async login(email: string, password: string) {
        const user = await this.validateUser(email, password);
        const userDetails = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(userDetails),
            user: user
        };
    }


}
