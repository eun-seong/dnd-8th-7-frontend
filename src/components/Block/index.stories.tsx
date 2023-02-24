import { ComponentMeta, ComponentStory } from '@storybook/react'
import Block from '@/components/Block'
import type { Block as BlockType } from '@/types/block'

export default {
  title: 'components/Block',
  components: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />

const MOCK_DATA: BlockType = {
  color: '#FF7154',
  icon: '😂',
  blockTitle: '출근 준비',
  sumOfTask: 4,
  sumOfDoneTask: 2,
  tasks: [
    {
      taskId: 0,
      task: '할 일 1',
      isDone: false,
    },
    {
      taskId: 1,
      task: '할 일 2',
      isDone: true,
    },
    {
      taskId: 2,
      task: '할 일 3',
      isDone: true,
    },
    {
      taskId: 3,
      task: '할 일 3',
      isDone: false,
    },
  ],
}

const { color, icon, blockTitle, sumOfTask, sumOfDoneTask, tasks } = MOCK_DATA

export const Basic = Template.bind({})
Basic.args = {
  color,
  icon,
  blockTitle,
  sumOfTask,
  sumOfDoneTask,
  tasks,
  locked: false,
}
