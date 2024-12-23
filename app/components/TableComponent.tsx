import { Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

type TableComponentProps = {
    columns: GridColDef[]
    rows: any[]
}

export default function TableComponent({ columns, rows }: TableComponentProps) {
    return (
        <Paper className="flex-1 custom-scrollbar overflow-hidden">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 15, 20]}
                checkboxSelection={true}
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableRowSelectionOnClick={true}
                className="!text-xs"
                rowHeight={40}
                sx={{ border: 0 }}
            />
        </Paper>
    )
}
