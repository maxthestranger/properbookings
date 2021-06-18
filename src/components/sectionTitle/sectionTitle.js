import styles from './sectionTitle.module.scss';

const SectionTitle = ({titletext, emoji}) => (
    <h3 className={`h3 ${styles.h3}`}>
        {titletext}
        <span>{emoji}</span>
    </h3>
)

export default SectionTitle;
