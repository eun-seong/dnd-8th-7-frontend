import * as Type from '@/api/types/base.types'
import { ServiceFunc } from './types'

export default interface DayBlockService {
  getDailyBlocksOnWeek: ServiceFunc<
    Type.GetDailyBlocksOnWeekParams,
    Type.GetDailyBlocksOnWeekResponse
  >

  getDayBlocks: ServiceFunc<Type.GetDayBlocksParams, Type.GetDayBlocksResponse>

  createBlock: ServiceFunc<Type.CreateBlockParams, Type.CreateBlockResponse>
  deleteBlock: ServiceFunc<Type.DeleteBlockParams, Type.DeleteBlockResponse>

  createDailyReview: ServiceFunc<
    Type.CreateDailyReviewParams,
    Type.CreateDailyReviewResponse
  >

  createTaskInBlock: ServiceFunc<
    Type.CreateTaskInBlockParams,
    Type.CreateTaskInBlockResponse
  >
  updateTaskInBlock: ServiceFunc<
    Type.UpdateTaskInBlockParams,
    Type.UpdateTaskInBlockResponse
  >
  deleteTaskInBlock: ServiceFunc<
    Type.DeleteTaskInBlockParams,
    Type.DeleteTaskInBlockResponse
  >
}
