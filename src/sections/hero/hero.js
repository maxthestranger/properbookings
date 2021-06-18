import Form from '../../components/form/form';

//styles
import styles from './hero.module.scss';

const Hero = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.imgAsBg}>
                            <img src="/images/bgs/hero.png" alt="Hero Image" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;