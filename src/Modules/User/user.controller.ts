import { 
    Body, 
    Get, 
    ParseIntPipe,
    Param,
    Patch,
    Post, 
    Delete,
    UseGuards,
    Query,
    UsePipes,
    ValidationPipe,
    Request, 
    HttpException,
    HttpStatus
  } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './Services/user.service';
import { usersByRoleDTO } from './DTO/UsersByRole.dto';
import { updateUserDTO } from './DTO/UpdateUser.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {

    constructor(
        private userService: UserService
    ){}

    //Ready and Verified by Jawwad
    @Get()
    async fetchUsers(){
        const result = await this.userService.fetchUsers();
        return result;
    }

    //Ready and Verified by Jawwad
    @Get(':userId')
    async fetchUserById(@Param('userId') id: string){
        const result = await this.userService.fetchUserById(id);
        return result;
    }

    //Ready and Verified by Jawwad
    @Post('byRole')
    @UsePipes(ValidationPipe)
    async fetchUsersByRole(@Body() roleBody: usersByRoleDTO ){
        const result = await this.userService.fetchUsersByRole(roleBody);
        return result;
    }

    //Ready and Verified by Jawwad
    @Patch('update/:userId')
    @UsePipes(ValidationPipe)
    async updateUser(@Param('userId') userId: string, @Body() userBody: updateUserDTO){
        if(Object.keys(userBody).length === 0){
            throw new HttpException('Empty Body request is not allowed',HttpStatus.BAD_REQUEST);
        }
        console.log(userId);
        const result = await this.userService.updateUser(userId, userBody);
        return result;
    }

    //Ready and Verified by Jawwad
    @Delete('delete/:userId')
    async deleteUser(@Param('userId') userId: string){
        console.log(userId);
        const result = await this.userService.deleteUser(userId);
        return result;
    }
}
