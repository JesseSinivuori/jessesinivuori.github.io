import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

export default function CardDeal() {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br
                    className='sm:block hidden' />
                    in a few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Arcu, tortor, purus in quis aliquet eget mauris tortor.c Aliquet
                    ultrices ac, ametau.
                </p>

                <Button styles='mt-10' />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt='card' className='w-[100%] h-[100%]' />
            </div>
        </section>
    )
}