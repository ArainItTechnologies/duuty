using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DuutyApp.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddJobAndJobType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "12b78353-d10a-496c-9c8f-c23ecbfed13d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d7d456d-4fee-40dd-8b91-35efba719918");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "83e34bd9-5169-44be-bad2-a1fd46bc1cf7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c7805878-2d58-4f2b-9d07-67da2fdd1d0d");

            migrationBuilder.CreateTable(
                name: "JobTypes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    JobClassification = table.Column<int>(type: "int", maxLength: 50, nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "JobPosts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    Location = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PostedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExpiryDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Salary = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    JobClassification = table.Column<int>(type: "int", nullable: false),
                    JobTypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobPosts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobPosts_JobTypes_JobTypeId",
                        column: x => x.JobTypeId,
                        principalTable: "JobTypes",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5f553020-c2df-4d3a-acae-e3eca895d7a0", "2", "Admin", "ADMIN" },
                    { "9c2c3313-ee3b-4992-a3b5-2d2919232c2b", "1", "SuperAdmin", "SUPERADMIN" },
                    { "e5571169-cc7d-44cd-95bb-ca160f04d3df", "3", "User", "USER" },
                    { "fee60b98-8053-4adc-b2a6-f8dba270995c", "4", "Guest", "GUEST" }
                });

            migrationBuilder.InsertData(
                table: "JobTypes",
                columns: new[] { "Id", "Created", "JobClassification", "LastModified" },
                values: new object[,]
                {
                    { new Guid("0088aaed-0e72-4374-970e-671bd475aee8"), DateTimeOffset.UtcNow, 1, DateTimeOffset.UtcNow },
                    { new Guid("04e430aa-ad9e-41ed-bda3-19901350fee7"), DateTimeOffset.UtcNow, 2, DateTimeOffset.UtcNow },
                    { new Guid("3e8deb04-6d04-4539-a23f-8bf355374f5d"), DateTimeOffset.UtcNow, 4, DateTimeOffset.UtcNow },
                    { new Guid("93d82f65-799c-4af4-99b2-2f68a2299236"), DateTimeOffset.UtcNow, 6, DateTimeOffset.UtcNow },
                    { new Guid("a0819228-1f22-48aa-8bbd-fdbcbd201fb3"), DateTimeOffset.UtcNow, 5, DateTimeOffset.UtcNow },
                    { new Guid("afa40082-a28e-4e0f-9d29-9f3ea8ac1263"), DateTimeOffset.UtcNow, 3, DateTimeOffset.UtcNow }
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobPosts_JobTypeId",
                table: "JobPosts",
                column: "JobTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_JobPosts_Location_JobClassification",
                table: "JobPosts",
                columns: new[] { "Location", "JobClassification" });

            migrationBuilder.CreateIndex(
                name: "IX_JobTypes_JobClassification",
                table: "JobTypes",
                column: "JobClassification",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobPosts");

            migrationBuilder.DropTable(
                name: "JobTypes");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5f553020-c2df-4d3a-acae-e3eca895d7a0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9c2c3313-ee3b-4992-a3b5-2d2919232c2b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e5571169-cc7d-44cd-95bb-ca160f04d3df");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fee60b98-8053-4adc-b2a6-f8dba270995c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "12b78353-d10a-496c-9c8f-c23ecbfed13d", "4", "Guest", "GUEST" },
                    { "2d7d456d-4fee-40dd-8b91-35efba719918", "1", "SuperAdmin", "SUPERADMIN" },
                    { "83e34bd9-5169-44be-bad2-a1fd46bc1cf7", "2", "Admin", "ADMIN" },
                    { "c7805878-2d58-4f2b-9d07-67da2fdd1d0d", "3", "User", "USER" }
                });
        }
    }
}
