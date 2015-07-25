<?php

return [
    'id' => 'frontend',
    'basePath' => dirname(__DIR__),
    'components' => [
        'urlManager' => require(__DIR__ . '/_urlManager.php'),

        'urlManagerBackend' => [
            'class' => 'yii\web\urlManager',
            'showScriptName' => false,
            'baseUrl' => '//backend.madeasy.local',
        ],

        'urlManagerFrontend' => [
            'class' => 'yii\web\urlManager',
            'showScriptName' => false,
            'baseUrl' => '//madeasy.local',
        ]
    ]
];
