import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Card, TextField, Tooltip } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const tableHeaderData = [
    {
        id: 'severity',
        label: 'Severity',
        minWidth: 120
    },
    {
        id: 'time',
        label: 'Time',
        minWidth: 120
    },
    {
        id: 'traceid',
        label: 'Trace ID',
        minWidth: 170
    },
    {
        id: 'serviceName',
        label: 'Service Name',
        minWidth: 170
    },
    {
        id: 'message',
        label: 'Message',
        minWidth: 170
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170
    }
]

const handleActionButton = () => {
    console.log('action button clicked')
}

function createData(severity, time, traceid, serviceName, message) {
    const actionButton = (
        <div>
            <Tooltip>
                <Button sx={{ m: "8px", backgroundColor: "blue", color: "black",
                    "&:hover": {
                        backgroundColor: "#ffffff",
                        color: "black",
                    },
                    }} onClick={handleActionButton}
                >
                    Trace
                </Button>
            </Tooltip>

            <Tooltip>
                <Button sx={{ m: "8px", backgroundColor: "blue", color: "black",
                    "&:hover": {
                        backgroundColor: "#ffffff",
                        color: "black",
                    },
                    }} onClick={handleActionButton}
                >
                    View
                </Button>
            </Tooltip>
        </div>
    );
    return { severity, time, traceid, serviceName, message, action: actionButton };
}

const tableBodyData = [
    createData('Error', '2021-10-10 10:10:10', '6adf9876fg786548ghtrws899', 'order-project', 'No order found with id 123'),
    createData('Info', '2021-10-10 10:10:20', '6adf9876fg786548ghtrws900', 'order-project', 'No order found with id 123'),
    createData('Error', '2021-10-10 10:10:21', '6adf9876fg786548ghtrws901', 'order-project', 'No order found with id 123'),
    createData('Warn', '2021-10-10 10:10:24', '6adf9876fg786548ghtrws902', 'order-project', 'id is not used inside'),
    createData('Error', '2021-10-10 10:10:25', '6adf9876fg786548ghtrws903', 'order-project', 'No order found with id 123'),
    createData('Error', '2021-10-10 10:10:26', '6adf9876fg786548ghtrws904', 'order-project', 'No order found with id 123'),
]

const Loglists = () => {
  return (
    <div>
        <Box>
            <TextField
            className="search-bar"
            label="Search"
            variant="outlined"
            size="large"
            style={{ borderWidth: "4px", marginBottom: "10px", width: "80%" }}
            InputProps={{
                endAdornment: <SearchOutlined />,
            }}
            />
        </Box>

        <Card>
        <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {tableHeaderData.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                
                </TableRow>
            </TableHead>
            <TableBody>
                {tableBodyData.map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.traceid}>
                    {tableHeaderData.map((column) => {
                        const value = row[column.id];
                        // return (
                        // <TableCell key={column.id} align={column.align}>
                        //     {value}
                        // </TableCell>
                        // )
                        if (column.id === 'action') {
                            return (
                                <TableCell key={column.id} align={column.align}>
                                    {value}
                                </TableCell>
                            );
                        } else {
                            return (
                                <TableCell key={column.id} align={column.align}>
                                    {value}
                                </TableCell>
                            );
                        }
    
                    })}
                    </TableRow>
                )
                })}
            </TableBody>
            </Table>
        </TableContainer>
        </Card>
    </div>
  )
}

export default Loglists