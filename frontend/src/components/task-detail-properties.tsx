import {
  Box,
  BoxProps,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { TaskDetail } from '@/models/task';

interface TaskDetailPropertiesProps extends BoxProps {
  task: TaskDetail;
}

const TaskDetailProperties: React.FC<TaskDetailPropertiesProps> = ({
  task,
  ...boxProps
}) => {
  const { t } = useTranslation();

  return (
    <Box {...boxProps}>
      <VStack spacing={6} align="stretch">
        <VStack spacing={2} align="stretch">
          <Text className="subtitle">
            {t('TaskDetailProperties.title.description')}
          </Text>
        </VStack>

        <VStack spacing={2} align="stretch">
          <Text className="subtitle">
            {t('TaskDetailProperties.title.global-properties')}
          </Text>
        </VStack>

        <VStack spacing={2} align="stretch">
          <Text className="subtitle">
            {t('TaskDetailProperties.title.local-properties')}
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default TaskDetailProperties;