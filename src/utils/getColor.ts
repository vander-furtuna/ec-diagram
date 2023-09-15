import { CourseType } from '../@types/ICourse';
import { theme } from '../styles/theme';

export const getCardColor = (
    type: CourseType[],
    isUnlocked: boolean,
    isPrerequisite: boolean,
) => {
    if (isPrerequisite) {
        return theme.background.card.prerequisite;
    }

    if (isUnlocked) {
        return theme.background.card.unlocked;
    }

    if (
        type.includes(CourseType.AUTOMATION) &&
        type.includes(CourseType.COMPUTING)
    ) {
        return `radial-gradient(farthest-corner at 0px 0px, ${theme.background.card.automation} 30%, ${theme.background.card.computing} 90%)`;
    }

    if (
        type.includes(CourseType.AUTOMATION) &&
        type.includes(CourseType.TELECOMMUNICATIONS)
    ) {
        return `radial-gradient(farthest-corner at 0px 0px, ${theme.background.card.automation} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (
        type.includes(CourseType.COMPUTING) &&
        type.includes(CourseType.TELECOMMUNICATIONS)
    ) {
        return `radial-gradient(farthest-corner at 0px 0px, ${theme.background.card.computing} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (type.includes(CourseType.AUTOMATION)) {
        return theme.background.card.automation;
    }

    if (type.includes(CourseType.COMPUTING)) {
        return theme.background.card.computing;
    }

    if (type.includes(CourseType.TELECOMMUNICATIONS)) {
        return theme.background.card.telecomunications;
    }

    if (type.includes(CourseType.MANDATORY)) {
        return theme.background.card.mandatory;
    }
};

export const getColor = (type: CourseType[]) => {
    if (
        type.includes(CourseType.AUTOMATION) &&
        type.includes(CourseType.COMPUTING)
    ) {
        return `radial-gradient(farthest-corner at 0px 0px, ${theme.background.card.automation} 30%, ${theme.background.card.computing} 90%)`;
    }

    if (
        type.includes(CourseType.AUTOMATION) &&
        type.includes(CourseType.TELECOMMUNICATIONS)
    ) {
        return `radial-gradient(farthest-corner at 0px 0px, ${theme.background.card.automation} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (
        type.includes(CourseType.COMPUTING) &&
        type.includes(CourseType.TELECOMMUNICATIONS)
    ) {
        return `radial-gradient(farthest-corner at 0px 0px, ${theme.background.card.computing} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (type.includes(CourseType.AUTOMATION)) {
        return theme.background.card.automation;
    }

    if (type.includes(CourseType.COMPUTING)) {
        return theme.background.card.computing;
    }

    if (type.includes(CourseType.TELECOMMUNICATIONS)) {
        return theme.background.card.telecomunications;
    }

    if (type.includes(CourseType.MANDATORY)) {
        return theme.background.card.mandatory;
    }
};
