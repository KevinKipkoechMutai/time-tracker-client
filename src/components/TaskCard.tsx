/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Typography, useTheme } from "@mui/material"
import FlexBetween from "./FlexBetween"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDeleteTaskMutation } from "@/scenes/state/api"
import { useState } from "react"

type Props = {
    name: string,
    id: string,
    taskType: string,
    timeSpent: number,
    startDate?: string,
}

const TaskCard = ({ id, name, taskType, timeSpent, startDate }: Props) => {
    const { palette } = useTheme()
    //const [isDeleting, setIsDeleting] = useState(false)

    //delete a task
    const handleDelete = async (id: string) => {
        
    }
    
  return (
    <Box 
        width="30rem" 
        m="auto" 
        display="flex" 
        flexDirection="column" 
        gap="1rem" 
        sx={{ 
            backgroundColor: palette.grey[800],
            padding: "0.5rem",
            borderRadius: "0.2rem"
              }}>
        <FlexBetween display="flex" flexDirection="row" gap="0.2rem">
            <Typography variant="h4">Name:</Typography>
            <Typography variant="h5">{name}</Typography>
        </FlexBetween>
        <FlexBetween display="flex" flexDirection="row" gap="0.2rem">
            <Typography variant="h4">Type:</Typography>
            <Typography variant="h5">{taskType}</Typography>
        </FlexBetween>
        <FlexBetween display="flex" flexDirection="row" gap="0.2rem">
            <Typography variant="h4">Started:</Typography>
            <Typography variant="h5">{startDate ? startDate : new Date().getDate()}</Typography>
        </FlexBetween>
        <FlexBetween display="flex" flexDirection="row" gap="0.2rem">
            <Typography variant="h4">Number of days:</Typography>
            <Typography variant="h5">{timeSpent}</Typography>
        </FlexBetween>
        <FlexBetween display="flex" flexDirection="row" gap="0.3rem">
            <Button variant="contained">Edit Task</Button>
            <Button 
                variant="contained" 
                startIcon={<DeleteIcon/>} 
                sx={{ backgroundColor: "red" }}
                onClick={() => handleDelete(id)}
                
            >Delete</Button>
        </FlexBetween>
    </Box>
  )
}

export default TaskCard