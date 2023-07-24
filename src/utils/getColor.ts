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

    if (type.includes('AUTOMATION') && type.includes('COMPUTING')) {
        return `linear-gradient(225deg, ${theme.background.card.automation} 30%, ${theme.background.card.computing} 90%)`;
    }

    if (type.includes('AUTOMATION') && type.includes('TELECOMMUNICATIONS')) {
        return `linear-gradient(225deg, ${theme.background.card.automation} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (type.includes('COMPUTING') && type.includes('TELECOMMUNICATIONS')) {
        return `linear-gradient(225deg, ${theme.background.card.computing} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (type.includes('AUTOMATION')) {
        return theme.background.card.automation;
    }

    if (type.includes('COMPUTING')) {
        return theme.background.card.computing;
    }

    if (type.includes('TELECOMMUNICATIONS')) {
        return theme.background.card.telecomunications;
    }

    if (type.includes('MANDATORY')) {
        return theme.background.card.mandatory;
    }
};

export const getColor = (type: CourseType[]) => {
    if (type.includes('AUTOMATION') && type.includes('COMPUTING')) {
        return `linear-gradient(225deg, ${theme.background.card.automation} 30%, ${theme.background.card.computing} 90%)`;
    }

    if (type.includes('AUTOMATION') && type.includes('TELECOMMUNICATIONS')) {
        return `linear-gradient(225deg, ${theme.background.card.automation} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (type.includes('COMPUTING') && type.includes('TELECOMMUNICATIONS')) {
        return `linear-gradient(225deg, ${theme.background.card.computing} 0%, ${theme.background.card.telecomunications} 100%)`;
    }

    if (type.includes('AUTOMATION')) {
        return theme.background.card.automation;
    }

    if (type.includes('COMPUTING')) {
        return theme.background.card.computing;
    }

    if (type.includes('TELECOMMUNICATIONS')) {
        return theme.background.card.telecomunications;
    }

    if (type.includes('MANDATORY')) {
        return theme.background.card.mandatory;
    }
};
