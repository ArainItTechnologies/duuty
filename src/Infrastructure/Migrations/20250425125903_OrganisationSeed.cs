using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class OrganisationSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10000000-0000-0000-0000-000000000001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ec17b3ad-325c-4358-a478-24c2fddf9f0b", "AQAAAAIAAYagAAAAEFscWxBWA791Bx6uLxdcSE1AYLP499wzDJovZyuC/pTDnCHvRaw46jiasdhMDUm+eA==", "9e48f822-851a-45df-88f7-9686c64934fc" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10000000-0000-0000-0000-000000000002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a854cf8e-034c-4c3c-9d1b-d320daaf30ad", "AQAAAAIAAYagAAAAEJNBfFMQqK9zNibmNHq4Wahf4RpVPfjm2ICw7h2E3ej7vH/T3ABVVQqrP+zJUE7Z4w==", "3fae05a5-7493-4a41-b377-7e25c7728403" });

            migrationBuilder.InsertData(
                table: "Organisations",
                columns: new[] { "Id", "AddressId", "Name" },
                values: new object[] { new Guid("bf1bcda8-37ea-48aa-accc-db220d1be1f8"), new Guid("c8c40fb6-fa19-4d9f-9e27-09b91b905945"), "Arain IT Technologies" });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "AddressLine1", "AddressLine2", "City", "Country", "IsCurrentAddress", "OrganisationId", "PostalCode", "StateOrProvince" },
                values: new object[] { new Guid("c8c40fb6-fa19-4d9f-9e27-09b91b905945"), "95 Manor Road", null, "Newent", "United Kingdom", false, new Guid("bf1bcda8-37ea-48aa-accc-db220d1be1f8"), "GL18 1UJ", "Gloucestershire" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Addresses",
                keyColumn: "Id",
                keyValue: new Guid("c8c40fb6-fa19-4d9f-9e27-09b91b905945"));

            migrationBuilder.DeleteData(
                table: "Organisations",
                keyColumn: "Id",
                keyValue: new Guid("bf1bcda8-37ea-48aa-accc-db220d1be1f8"));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10000000-0000-0000-0000-000000000001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "bba20806-0be1-4ac7-bfaf-12f43609aa9c", "AQAAAAIAAYagAAAAEPCr01RgG82SuYhPnCEwGgzvvYqhQ3vmcN39uxioViMHdT3VBjnrBfh4ZojzSl3RTg==", "171b7119-dc1c-456f-9659-4352b6803306" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10000000-0000-0000-0000-000000000002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "e07b3534-a3a6-459d-94cb-2de05b92596b", "AQAAAAIAAYagAAAAEE38uJ4YJPLZ4VA/r02Q66R/Ghhzqi7Eb/cAhMsPIfPnmXBJ9kZtR8swQNfc8CE//A==", "6c290c7e-083e-4911-933f-2390d03ba270" });
        }
    }
}
