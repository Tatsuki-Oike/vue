import { createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            image_objects: [
                {
                    "title": "統計学",
                    "num_videos": 12,
                    "path": "01_統計学.jpg",
                    "link": "https://www.youtube.com/watch?v=ax0xi4qtciY&list=PL7BUpEjz_maR6M65ZMheoi1PKcHdaf74b",
                },
                {
                    "title": "ベイズ統計学",
                    "num_videos": 17,
                    "path": "02_ベイズ統計学.jpg",
                    "link": "https://www.youtube.com/watch?v=yzuQAI7Rlvg&list=PL7BUpEjz_maTJeE_eebghTVgJQSlEargd",
                },
                {
                    "title": "機械学習",
                    "num_videos": 10,
                    "path": "03_機械学習.jpg",
                    "link": "https://www.youtube.com/watch?v=ukHjnEqU5gQ&list=PL7BUpEjz_maTHx77ed-4_zpwFhoYHyhyn",
                },
                {
                    "title": "ニューラルネットワーク",
                    "num_videos": 12,
                    "path": "04_ニューラルネット.jpg",
                    "link": "https://www.youtube.com/watch?v=vldXo9Q4s2o&list=PL7BUpEjz_maRrUiHaZvSoBa76U-nhg2fW",
                },
                {
                    "title": "ベイズ統計モデリング",
                    "num_videos": 20,
                    "path": "05_ベイズ統計モデリング.jpg",
                    "link": "https://www.youtube.com/watch?v=1sC-krj_cxQ&list=PL7BUpEjz_maRZkD6iPytMRt46wfT4bk-E",
                },
                {
                    "title": "ベイズ機械学習",
                    "num_videos": 16,
                    "path": "06_ベイズ機械学習.jpg",
                    "link": "https://www.youtube.com/watch?v=KhEJjEbsGGE&list=PL7BUpEjz_maR8r1h6hHlKO5GeTVpZd310",
                },
                {
                    "title": "データサイエンスで使う線形代数",
                    "num_videos": 12,
                    "path": "07_線形代数.jpg",
                    "link": "https://www.youtube.com/watch?v=fIjTU4BO6mU&list=PL7BUpEjz_maRw9Dba2ivvT3PXoKsjoRbz",
                },
                {
                    "title": "データサイエンスで使う微積分と最適化数学",
                    "num_videos": 16,
                    "path": "08_微積分.jpg",
                    "link": "https://www.youtube.com/watch?v=iuM1ZC-fRGs&list=PL7BUpEjz_maRRRtzvrCHtz97c_yC-uYkM",
                },
                {
                    "title": "データサイエンスで使う統計学",
                    "num_videos": 16,
                    "path": "09_統計学.jpg",
                    "link": "https://www.youtube.com/watch?v=-L9I2BLWLQo&list=PL7BUpEjz_maQWJlH-hLuAR05KnSnZD3NW",
                },
                {
                    "title": "R言語の基礎",
                    "num_videos": 5,
                    "path": "10_r言語.jpg",
                    "link": "https://www.youtube.com/watch?v=LCsrRcQ9rNg&list=PL7BUpEjz_maSLWb2QAfx-DHgw2uE7j_Wh",
                },
                {
                    "title": "Rで統計学",
                    "num_videos": 9,
                    "path": "11_r統計学.jpg",
                    "link": "https://www.youtube.com/watch?v=VU0m-Z-f5WU&list=PL7BUpEjz_maQYQWzj5gS4cQc0AfydhUW9",
                },
                {
                    "title": "Rstudioで自動レポート作成",
                    "num_videos": 9,
                    "path": "12_rでレポート.jpg",
                    "link": "https://www.youtube.com/watch?v=Z7E0OPb-OCQ&list=PL7BUpEjz_maTjqAvjKATE0cXq1bgeVn6v",
                },
                {
                    "title": "多変量解析",
                    "num_videos": 15,
                    "path": "13_多変量解析.jpg",
                    "link": "https://www.youtube.com/watch?v=qchSfoKbLJk&list=PL7BUpEjz_maQAgSC-hDkbL9gCnl_Mc0Bq",
                },
                {
                    "title": "Rで多変量解析",
                    "num_videos": 15,
                    "path": "14_rで多変量解析.jpg",
                    "link": "https://www.youtube.com/watch?v=3D8CxfpMODE&list=PL7BUpEjz_maStPJXyh1XeThnyHBGn4j9N",
                },
                {
                    "title": "Pythonの基礎",
                    "num_videos": 5,
                    "path": "15_python.jpg",
                    "link": "https://www.youtube.com/watch?v=X4uL264x35M&list=PL7BUpEjz_maR-IDAXK2lyhBoF1UFdss1t",
                },
                {
                    "title": "Pythonでニューラルネットワーク",
                    "num_videos": 12,
                    "path": "16_python_nn.jpg",
                    "link": "https://www.youtube.com/watch?v=ytH8WAisM_s&list=PL7BUpEjz_maRp6rNKURBDWsdpuo3mHFS4",
                },
                {
                    "title": "PythonでCNN",
                    "num_videos": 9,
                    "path": "17_python_cnn.jpg",
                    "link": "https://www.youtube.com/watch?v=J9lOwuvx9rU&list=PL7BUpEjz_maRkzLevY-Z16Is40ND3xCQY",
                },
                {
                    "title": "Pytorchでニューラルネットワーク",
                    "num_videos": 12,
                    "path": "18_pytorch_nn.jpg",
                    "link": "https://www.youtube.com/watch?v=lIPSMxDgDT4&list=PL7BUpEjz_maTXqkTb4qPKZWJD98bV4Aw2",
                },
                {
                    "title": "深層生成モデル",
                    "num_videos": 7,
                    "path": "19_深層生成モデル.jpg",
                    "link": "https://www.youtube.com/watch?v=KKdGZmRufPM&list=PL7BUpEjz_maTGasrCrIiKctZQOH_rPnTl",
                },
                {
                    "title": "Pytorchで深層生成モデル",
                    "num_videos": 13,
                    "path": "20_pytorch_深層生成モデル.jpg",
                    "link": "https://www.youtube.com/watch?v=fF7lkdQ1J0U&list=PL7BUpEjz_maQYiUp2laOmVxKItRGeEoqo",
                },
                {
                    "title": "Rでベイズ統計学",
                    "num_videos": 10,
                    "path": "21_r_bayes.jpg",
                    "link": "https://www.youtube.com/watch?v=nYWfim6Upv0&list=PL7BUpEjz_maS2CJknDwUfzraC6GQNJ4sv",
                },
                {
                    "title": "Rでベイズ統計モデリング",
                    "num_videos": 22,
                    "path": "22_r_bayes_model.jpg",
                    "link": "https://www.youtube.com/watch?v=Q7404MnA9Os&list=PL7BUpEjz_maTsbjev7Dpz02-WUomMrGIX",
                },
                {
                    "title": "データサイエンス概論",
                    "num_videos": 6,
                    "path": "23_data_science.jpg",
                    "link": "https://www.youtube.com/watch?v=PExBVoXPy5I&list=PL7BUpEjz_maSOUOgX_0sRRvY8VLoufPaJ",
                },
                {
                    "title": "統計的因果推論",
                    "num_videos": 10,
                    "path": "24_統計的因果推論.jpg",
                    "link": "https://www.youtube.com/watch?v=3I3YhN5blCk&list=PL7BUpEjz_maTG5-A8nme3uElI5rUlazRC",
                },
                {
                    "title": "強化学習",
                    "num_videos": 10,
                    "path": "25_強化学習.jpg",
                    "link": "https://www.youtube.com/watch?v=LEDQr80YXMU&list=PL7BUpEjz_maQjfwIhAzkwxaLYIecfN7QP",
                },
                {
                    "title": "FlaskでWEBアプリ作成",
                    "num_videos": 11,
                    "path": "26_flask.jpg",
                    "link": "https://www.youtube.com/watch?v=6hO5op_V5ao&list=PL7BUpEjz_maSSkE1LoWYX2S0zB9XshxVH",
                },
                {
                    "title": "BootstrapでWEBアプリデザイン",
                    "num_videos": 7,
                    "path": "27_bootstrap.jpg",
                    "link": "https://www.youtube.com/watch?v=HMMvLzEdXFA&list=PL7BUpEjz_maR_H6ITbSdyNJV5RQQYlGMY",
                },
                {
                    "title": "ゼロから始めるGitとGithub",
                    "num_videos": 9,
                    "path": "28_github.jpg",
                    "link": "https://www.youtube.com/watch?v=KJVr06zCvD4&list=PL7BUpEjz_maSxQ3F4kBBjkLPi6mXQldG-",
                },
                {
                    "title": "Dockerの基礎",
                    "num_videos": 9,
                    "path": "29_docker.jpg",
                    "link": "https://www.youtube.com/watch?v=2s90o8ma8aQ&list=PL7BUpEjz_maRKfBY4N9De2YDwVu9pbNSa",
                },
                {
                    "title": "ゼロから丁寧に始めるPython",
                    "num_videos": 11,
                    "path": "30_ゼロから丁寧に始めるpython.jpg",
                    "link": "https://www.youtube.com/watch?v=nhXmBJFnlBE&list=PL7BUpEjz_maQNPA3_pSP1c-kOjdD83_JV",
                },
                {
                    "title": "Pythonでデータ分析",
                    "num_videos": 8,
                    "path": "31_python_data.jpg",
                    "link": "https://www.youtube.com/watch?v=fLbTtc6n0bo&list=PL7BUpEjz_maTvzFfsddFIY7fSNszDHwp6",
                },
                {
                    "title": "Pythonスクリプト",
                    "num_videos": 10,
                    "path": "32_python_script.jpg",
                    "link": "https://www.youtube.com/watch?v=j1L9YVVCJAQ&list=PL7BUpEjz_maQ9d5HN5YKRIHYTX6sBxnbn",
                },
                {
                    "title": "ゼロからわかる最新生成AIの歴史",
                    "num_videos": 8,
                    "path": "33_generation.jpg",
                    "link": "https://www.youtube.com/watch?v=NUnj1X0OMEg&list=PL7BUpEjz_maT_ZNTQkPXH1P_qCBbeW0dG",
                },
                {
                    "title": "BERTによる自然言語処理入門",
                    "num_videos": 10,
                    "path": "34_nlp.jpg",
                    "link": "https://www.youtube.com/watch?v=kL-QhhVgqr0&list=PL7BUpEjz_maTBvqy1fsEiHBwpeVAgGarU",
                },
            ],
            image_path_objects: [],
        }
    },
    mutations : {
        make_path: (state) => {
            state.image_path_objects = state.image_objects.map(obj => {
                obj.path = new URL('./assets/images/' + obj.path, import.meta.url).href
                return obj
            })
        },
    },
})