import jobtitlesRoutes from './jobtitles/jobtitlesroutes'
import departmentsRoutes from './departments/departmentsroutes'
import employeesRoutes from './employees/employeesroutes'
import homeRoutes from './home/homeroutes'

export default [
  ...jobtitlesRoutes,
  ...departmentsRoutes,
  ...employeesRoutes,
  ...homeRoutes
]