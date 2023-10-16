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
    HttpStatus,
    Req
  } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './Services/user.service';
import { usersByRoleDTO } from './DTO/UsersByRole.dto';
import { updateUserDTO } from './DTO/UpdateUser.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '@app/Utilities/Jwt/jwtAuthGuard';
import { ExtendedRequest } from '@app/Utilities/Template/extented-request.interface';

@Controller('users')
@ApiTags('Users')
export class UserController {
    constructor(
        private userService: UserService
    ){}

//#region : Users CRUD

    //Ready and Verified by Jawwad
    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('jwt')
    async fetchUsers(){
        const result = await this.userService.fetchUsers();
        return result;
    }

    //Ready and Verified by Jawwad
    @Get(':userId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('jwt')
    async fetchUserById(@Param('userId') id: string){
        const result = await this.userService.fetchUserById(id);
        return result;
    }

    //Ready and Verified by Jawwad
    @Post('byRole')
    @UseGuards(JwtAuthGuard) // Working properly
    @UsePipes(ValidationPipe)
    @ApiBearerAuth('jwt')
    async fetchUsersByRole(@Body() roleBody: usersByRoleDTO, @Req() req: ExtendedRequest ){
        const { user } = req;
        console.log("User form req", user);
        const result = await this.userService.fetchUsersByRole(roleBody);
        return result;
    }

    //Ready and Verified by Jawwad
    @Patch('update/:userId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('jwt')
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
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('jwt')
    async deleteUser(@Param('userId') userId: string){
        console.log(userId);
        const result = await this.userService.deleteUser(userId);
        return result;
    }

//#endregion

}
