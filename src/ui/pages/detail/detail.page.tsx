import { memo, useCallback } from 'react';
import { PageHeader } from 'antd';
import css from './detail.module.css';
import { useHistory } from 'react-router-dom';
import { Video } from '../../components/video/video.component';
import { Question } from '../../components/question/question.component';

export const DetailCourse = memo(() => {
	const history = useHistory();
	const handleBack = useCallback(() => history.push('/'), [history]);

	return (
		<div className={css.container}>
			<PageHeader title="Title Course" onBack={handleBack} />
			<div className={css.content}>
				<p>
					Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
					стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
					создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
					Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
					электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами
					Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
					PageMaker, в шаблонах которых используется Lorem Ipsum.
				</p>
				<img src="/logo512.png" className={css.media} alt="image" />
				<p>
					Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.
					Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий
					назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
					самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской
					литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33
					книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году
					н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem
					Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32
				</p>
				<Video url={'https://www.youtube.com/watch?v=PZXx1OewNPQ'} />
				<p>
					Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.
					Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий
					назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
					самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской
					литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33
					книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году
					н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem
					Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32
				</p>
				<Question
					currentAnswerIndex={1}
					question={'What is question?'}
					answers={[
						{ value: 'some answer 1 ', description: 'This is wrong answer. Choose second point' },
						{ value: 'some answer 2', description: 'You win' },
						{ value: 'some answer 3', description: 'This is wrong answer. Choose second point' },
					]}
				/>
			</div>
		</div>
	);
});
