import classNames from 'classnames'
import styles from './styles.module.scss'

 interface CommentsOnAdvertisementsProps {
    title: string,
    text: string,
    stylesProps?: string
}

export const CommentsOnAdvertisements = (props: CommentsOnAdvertisementsProps) => {
    const {
        title = '',
        text = '',
        stylesProps,
    } = props

    return (
        <div className={classNames(styles.size, {}, stylesProps)}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
