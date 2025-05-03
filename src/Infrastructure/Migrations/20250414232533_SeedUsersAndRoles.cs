using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SeedUsersAndRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "A1B2C3D4-E5F6-7890-1234-56789ABCDEF0", null, "Administrator role with full access to the system.", "Admin", "ADMIN" },
                    { "B2C3D4E5-F678-9012-3456-789ABCDEFA1B", null, "Standard user role with limited access to the system.", "User", "USER" },
                    { "C3D4E5F6-7890-1234-5678-9ABCDEFA1B2C", null, "Employer role with access to manage job postings and applications.", "Employer", "EMPLOYER" },
                    { "D4E5F678-9012-3456-789A-BCDEFA1B2C3D", null, "Manager role with access to oversee operations and manage teams.", "Manager", "MANAGER" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FullName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "10000000-0000-0000-0000-000000000001", 0, "02489656-015a-46a1-b9cb-dd7adb942e75", "admin@duuty.com", true, null, false, null, "ADMIN@DUUTY.COM", "ADMIN@DUUTY.COM", "AQAAAAIAAYagAAAAEENtPO0/yiKeA2/2k8ax0l/vqcEQW9vPIODgXgonrm763IpUaWK2rwbiyzr5cE6vgQ==", null, false, "db34d3fa-888b-492e-ab80-55248b816feb", false, "admin@duuty.com" },
                    { "10000000-0000-0000-0000-000000000002", 0, "36dc0dae-d9b8-4947-9f15-495d4f61ab48", "employer@duuty.com", true, null, false, null, "EMPLOYER@DUUTY.COM", "EMPLOYER@DUUTY.COM", "AQAAAAIAAYagAAAAEP2LEvwyLpou3iIoNP+OsVzx2Kg3LZgleJ5EK+31gTcZvfKwOt1TQ91xIHxQJDBTEg==", null, false, "7a9214ac-5b5d-4d7c-ad5b-15a68d571fb1", false, "employer@duuty.com" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { "A1B2C3D4-E5F6-7890-1234-56789ABCDEF0", "10000000-0000-0000-0000-000000000001" },
                    { "C3D4E5F6-7890-1234-5678-9ABCDEFA1B2C", "10000000-0000-0000-0000-000000000002" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "B2C3D4E5-F678-9012-3456-789ABCDEFA1B");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "D4E5F678-9012-3456-789A-BCDEFA1B2C3D");

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "A1B2C3D4-E5F6-7890-1234-56789ABCDEF0", "10000000-0000-0000-0000-000000000001" });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "C3D4E5F6-7890-1234-5678-9ABCDEFA1B2C", "10000000-0000-0000-0000-000000000002" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "A1B2C3D4-E5F6-7890-1234-56789ABCDEF0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "C3D4E5F6-7890-1234-5678-9ABCDEFA1B2C");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10000000-0000-0000-0000-000000000001");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10000000-0000-0000-0000-000000000002");
        }
    }
}
