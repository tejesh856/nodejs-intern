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
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const typeorm_1 = require("typeorm");
let City = class City {
};
exports.City = City;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", width: 5 }),
    __metadata("design:type", Number)
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 27 }),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 10, nullable: true }),
    __metadata("design:type", String)
], City.prototype, "alt_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", width: 2 }),
    __metadata("design:type", Number)
], City.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 4 }),
    __metadata("design:type", String)
], City.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 18 }),
    __metadata("design:type", String)
], City.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 18 }),
    __metadata("design:type", String)
], City.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 8 }),
    __metadata("design:type", Number)
], City.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 8 }),
    __metadata("design:type", Number)
], City.prototype, "long", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)()
], City);
