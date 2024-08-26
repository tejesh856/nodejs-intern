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
exports.Airport = void 0;
const typeorm_1 = require("typeorm");
let Airport = class Airport {
};
exports.Airport = Airport;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", width: 4 }),
    __metadata("design:type", Number)
], Airport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 7 }),
    __metadata("design:type", String)
], Airport.prototype, "icao_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 3 }),
    __metadata("design:type", String)
], Airport.prototype, "iata_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 72 }),
    __metadata("design:type", String)
], Airport.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 14 }),
    __metadata("design:type", String)
], Airport.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", width: 5 }),
    __metadata("design:type", Number)
], Airport.prototype, "city_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", width: 3 }),
    __metadata("design:type", Number)
], Airport.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", width: 1 }),
    __metadata("design:type", Number)
], Airport.prototype, "continent_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128, nullable: true }),
    __metadata("design:type", String)
], Airport.prototype, "website_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 18 }),
    __metadata("design:type", String)
], Airport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 18 }),
    __metadata("design:type", String)
], Airport.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 9 }),
    __metadata("design:type", Number)
], Airport.prototype, "latitude_deg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 9 }),
    __metadata("design:type", Number)
], Airport.prototype, "longitude_deg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 5, nullable: true }),
    __metadata("design:type", String)
], Airport.prototype, "elevation_ft", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128, nullable: true }),
    __metadata("design:type", String)
], Airport.prototype, "wikipedia_link", void 0);
exports.Airport = Airport = __decorate([
    (0, typeorm_1.Entity)()
], Airport);
