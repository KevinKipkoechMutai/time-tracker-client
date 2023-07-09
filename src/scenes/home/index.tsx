/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Button, Typography, useTheme } from "@mui/material"
import HomeHero from "@/components/HomeHero"
import TaskContainer from "@/components/TaskContainer"
import TaskCard from "@/components/TaskCard"
import FlexBetween from "@/components/FlexBetween"
import { useGetTasksQuery } from "../state/api"
import { useMemo } from "react"


const Home = () => {
  const { palette } = useTheme()
  const data = useGetTasksQuery()
  const taskData = data.currentData

  //console.log(taskData)

  const tasks = useMemo(() => {
    return (
      taskData &&
      taskData.map(({ id, name, timeSpent, taskType, startDate}, index) => {
        const formattedStartDate = startDate.toLocaleString()

        return (
        <TaskCard 
          key={`Task-${index}`}
          name={name}
          id={id}
          timeSpent={timeSpent}
          taskType={taskType}
          startDate={formattedStartDate}
        />
        )
      })
    )
  }, [taskData])

  return (
    <Box width="100%" height="100%">
      <HomeHero />
      <Box width="40%" margin="auto" mt="2rem" mb="1rem">
        <FlexBetween gap="2rem">
          <Typography variant="h1" color={palette.grey[700]}>My Tasks</Typography>
          <Button variant="contained">+ Create Task</Button>
        </FlexBetween>
      </Box>
      <TaskContainer width="100%" p="1.5rem" display="flex" flexDirection="column" gap="0.3rem">
        {tasks}
      </TaskContainer>
    </Box>
  ) 
}

export default Home