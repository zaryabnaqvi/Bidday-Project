"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const CreateProject_dto_1 = require("./CreateProject.dto");
class UpdateProjectDto extends (0, mapped_types_1.PartialType)(CreateProject_dto_1.CreateProjectDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProjectDto = UpdateProjectDto;
//# sourceMappingURL=UpdateProject.dto.js.map