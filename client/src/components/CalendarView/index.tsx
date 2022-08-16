import SideBar from 'components/Sidebar';
import styled from 'styled-components';
import CalendarWeek from 'components/CalendarView/CalendarWeek';
import data from 'api/dummy-data.json'


const CalendarViewStyles = styled.div`
  display: flex;
  flex-direction: row;
`

const CalendarView = () => {
    const {week}= data;
    return(
        <CalendarViewStyles>
            <SideBar />
            <CalendarWeek week={week}/>
        </CalendarViewStyles>
    )
 }

 export default CalendarView