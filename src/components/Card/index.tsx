import { HTMLAttributes } from 'react';
import { ICourse } from '../../@types/ICourse';
import { CardContainer } from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  course: ICourse;
  isPrerequisite?: boolean;
  isUnlocked?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
}

export function Card({
  course,
  isPrerequisite = false,
  isUnlocked = false,
  isActive = false,
  isDisabled = false,
  ...rest
}: CardProps) {
  const { label, type } = course;

  return (
    <CardContainer
      type={type}
      {...rest}
      isActive={isActive}
      isPrerequisite={isPrerequisite}
      isUnlocked={isUnlocked}
      isDisabled={isDisabled}
    >
      <span>{label}</span>
    </CardContainer>
  );
}
