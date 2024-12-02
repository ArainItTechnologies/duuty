import {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import {getUsersList, addRoleToUser} from "../api/users";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [role, setRole] = useState("");
    const [search, setSearch] = useState("");

    // Fetch users from API
    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await getUsersList(token);
                setUsers(response.users);
                setFilteredUsers(response.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // Handle search input changes
    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearch(searchValue);

        const filtered = users.filter((user) =>
            user.email.toLowerCase().includes(searchValue)
        );

        setFilteredUsers(filtered);
    };

    // Add role to user
    const handleAddRole = async () => {
        if (!selectedUser || !role) return;

        try {
            const token = localStorage.getItem("token");
            await addRoleToUser({
                email: selectedUser.email,
                role,
            }, token);
            alert("Role added successfully");
        } catch (error) {
            console.error("Error adding role:", error);
            alert("Failed to add role");
        } finally {
            setModal(false);
        }
    };

    const columns = [
        {
            name: "USERNAME",
            selector: (row) => row.userName,
            sortable: true,
        },
        {
            name: "EMAIL",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "ROLES",
            selector: (row) => row.roles.join(", "),
            sortable: false,
        },
        {
            name: "ACTIONS",
            cell: (row) => (
                <>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={() => handleShowModal(row)}
                        className="me-2"
                    >
                        Add Role
                    </Button>
                </>
            ),
        },
        {
            name: (
                <div style={{textAlign: "center", width: "200px"}}>
                    <Input
                        type="text"
                        placeholder="Search by email"
                        value={search}
                        onChange={handleSearch}
                        className="form-control"
                        style={{width: "200px"}}
                    />
                </div>
            ),
            cell: () => null, // This column has no data in rows
        },
    ];

    // Show modal for adding a role
    const handleShowModal = (user) => {
        setSelectedUser(user);
        setModal(true);
    };

    return (
        <div className="data-table" style={{width: "100%"}}>
            <h2>User List</h2>
            <DataTable
                columns={columns}
                data={filteredUsers}
                progressPending={loading}
                pagination
                highlightOnHover
                defaultSortField="userName"
            />

            {/* Add Role Modal */}
            <Modal isOpen={modal} toggle={() => setModal(false)}>
                <ModalHeader toggle={() => setModal(false)}>Add Role</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="roleSelect">Select Role</Label>
                            <Input
                                type="select"
                                id="roleSelect"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Select a role</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                                <option value="Manager">Manager</option>
                                <option value="Guest">Guest</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setModal(false)}>
                        Close
                    </Button>
                    <Button color="primary" onClick={handleAddRole}>
                        Add Role
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default UserList;
