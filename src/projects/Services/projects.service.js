"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const project_schema_1 = require("../Schemas/project.schema");
let ProjectsService = class ProjectsService {
    constructor(projectModel) {
        this.projectModel = projectModel;
    }
    async create(createProjectDto) {
        try {
            const { LCINumber } = createProjectDto;
            const isProjectExist = await this.projectModel.findOne({ LCINumber });
            if (isProjectExist) {
                throw new common_1.BadRequestException('Project with the same LCINumber already exists');
            }
            const project = new this.projectModel(createProjectDto);
            const createdProject = await project.save();
            return {
                statusCode: 201,
                message: 'Project created successfully',
                data: createdProject,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAll() {
        try {
            const projects = await this.projectModel.find().exec();
            if (!projects || projects.length === 0) {
                throw new common_1.NotFoundException('No projects found');
            }
            return {
                statusCode: 200,
                message: 'Projects found successfully',
                data: projects,
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findOne(id) {
        try {
            const project = await this.projectModel.findById(id).exec();
            if (!project) {
                throw new common_1.NotFoundException('Project not found');
            }
            return {
                statusCode: 200,
                message: 'Project found successfully',
                data: project,
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async getUsersProject(id) {
        try {
            const projects = await this.projectModel.find({ UserId: id.toString() }).exec();
            if (!projects || projects.length === 0) {
                throw new common_1.NotFoundException('No projects found');
            }
            return {
                statusCode: 200,
                message: 'Projects found successfully for user',
                data: projects,
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async update(id, updateProjectDto) {
        try {
            if (!updateProjectDto || Object.keys(updateProjectDto).length === 0) {
                throw new common_1.BadRequestException('Empty update data');
            }
            const updatedProject = await this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true }).exec();
            if (!updatedProject) {
                throw new common_1.NotFoundException('Project not found');
            }
            return {
                statusCode: 200,
                message: 'Project updated successfully',
                data: updatedProject,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async remove(id) {
        try {
            const deletedProject = await this.projectModel.findByIdAndDelete(id).exec();
            if (!deletedProject) {
                throw new common_1.NotFoundException('Project not found');
            }
            return {
                statusCode: 200,
                message: 'Project deleted successfully',
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(project_schema_1.Project.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map