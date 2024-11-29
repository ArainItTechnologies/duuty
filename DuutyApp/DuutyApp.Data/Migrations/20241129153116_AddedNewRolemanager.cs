using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DuutyApp.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedNewRolemanager : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "00cef89a-421b-4bc7-adb7-711802d42784");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23ef6003-644d-4bfc-a52e-f0d1d70b9cc2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9ce244bd-42f1-4795-b0c1-f6a596705302");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "00cef89a-421b-4bc7-adb7-711802d42784", "3", "User", "User" },
                    { "23ef6003-644d-4bfc-a52e-f0d1d70b9cc2", "1", "SuperAdmin", "SuperAdmin" },
                    { "9ce244bd-42f1-4795-b0c1-f6a596705302", "2", "Admin", "Admin" }
                });
        }
    }
}
