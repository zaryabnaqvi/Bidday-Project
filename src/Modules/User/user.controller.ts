import { 
    Body, 
    Get, 
    ParseIntPipe,
    Param,
    Post, 
    UseGuards,
    UsePipes,
    ValidationPipe,
    Request 
  } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './Services/user.service';
import { Roles } from 'src/Utilities/Template/types';
import { usersByRoleDTO } from './DTO/UsersByRole.dto';

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ){}

    @Get()
    async fetchUsers(){
        const result = await this.userService.fetchUsers();
        return result
    }

    @Get(':userId')
    async fetchUserById(@Param('userId', ParseIntPipe) id: number){
        const result = await this.userService.fetchUserById(id);
        return result
    }

    @Get('byRole')
    async fetchUsersByRole(@Body() roleBody: usersByRoleDTO ){
        const result = await this.userService.fetchUsersByRole(roleBody);
        return result
    }

}
