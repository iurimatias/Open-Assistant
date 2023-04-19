import { getDashboardLayout } from "src/components/Layout";
import { TaskPage } from "src/components/TaskPage/TaskPage";
import { TaskType } from "src/types/Task";
export { getDefaultStaticProps as getStaticProps } from "src/lib/default_static_props";

const PromptReply = () => <TaskPage type={TaskType.prompt_reply} />;

PromptReply.getLayout = getDashboardLayout;

export default PromptReply;
