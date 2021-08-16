import { memo, useCallback } from 'react';
import { PageHeader } from 'antd';
import css from './detail.module.css';
import { useHistory } from 'react-router-dom';
import { Video } from '../../components/video/video.component';
import { Question } from '../../components/question/question.component';
import { RemoteData } from '@devexperts/remote-data-ts';
import { RenderRemoteData } from '../../components/render-remote-data';

interface CourseText {
	type: 'TEXT';
	data: string;
}

interface CourseVideo {
	type: 'VIDEO';
	src: string;
}

interface CourseImg {
	type: 'IMG';
	src: string;
}

type CourseBody = CourseText | CourseVideo | CourseImg;

interface CourseData {
	title: string;
	body?: CourseBody[];
}

interface DetailCoursePageProps {
	courseDetail: RemoteData<Error, CourseData>;
}

export const DetailCoursePage = memo((props: DetailCoursePageProps) => {
	const { courseDetail } = props;
	const history = useHistory();
	const handleBack = useCallback(() => history.push('/'), [history]);

	return (
		<RenderRemoteData
			value={courseDetail}
			success={data => (
				<div className={css.container}>
					<PageHeader title={data.title} onBack={handleBack} />
					<div className={css.content}>
						{data.body?.map(data => {
							switch (data.type) {
								case 'TEXT':
									return <p>{data.data}</p>;
								case 'IMG':
									return <img src={data.src} className={css.media} alt="image" />;
								case 'VIDEO':
									return <Video url={data.src} />;
							}
						})}
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
			)}
		/>
	);
});
