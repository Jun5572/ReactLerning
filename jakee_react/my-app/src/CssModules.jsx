import classes from './sass/CssModules.module.scss'

export const CssModules = ()=> {

    const {container, title, button} = classes

    return (
        <div className={container}>
            <p className={title}>CSS Modulesです</p>
            <button className={button}>ボタン</button>
        </div>
    )
}